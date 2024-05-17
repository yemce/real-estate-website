// const data=require("../model/data");
const db = require('../model/dataAccess');

exports.homePage = (req, res, next) => {
    res.render("user/home-page", { pageTitle: "Ana Sayfa" });
}

exports.list_advert = (req, res, next) => {
    // Veritabanından ilan verilerini al
    db.all('SELECT * FROM Adverts', (err, rows) => {
        if (err) {
            console.error(err.message);
            return next(err);
        }
        // Alınan verileri ilgili sayfaya gönder
        res.render('user/list-advert', { pageTitle: 'İlan Sayfası', data: rows });
    });
};


exports.view_advert = (req, res, next) => {
    const advertId = req.params.id;

    // Veritabanından belirli bir ilanı al
    db.get('SELECT * FROM Adverts WHERE id = ?', [advertId], (err, row) => {
        if (err) {
            console.error(err.message);
            return next(err);
        }
        if (!row) {
            // return res.status(404).render('404', { pageTitle: 'İlan Bulunamadı' });
        }
        // Alınan veriyi ilgili sayfaya gönder
        res.render('user/view-advert', {
            pageTitle: 'İlan Başlığı',
            data: row
        });
    });
};


exports.get_addAdvert= (req,res,next)=>{
    res.render("user/add-advert",{pageTitle:"İlan Ekle "})
}


exports.post_addAdvert = (req, res, next) => {
    const body = req.body;

    const newdata = {
        title: body.title || "",
        explain: body.explain || "",
        price: body.price || "",
        image: body.image || "",
        phone: body.phone || "",
        city: body.city || "",
        status: body.status || "",
        meters: body.meters || "",
        rooms: body.rooms || "",
        floor: body.floor || "",
        furniture: body.furniture || "",
    };

    // Veritabanına yeni ilan ekleme
    db.run(
        `INSERT INTO Adverts (title, explain, price, image, phone, city, status, meters, rooms, floor, furniture) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [newdata.title, newdata.explain, newdata.price, newdata.image, newdata.phone, newdata.city, newdata.status, newdata.meters, newdata.rooms, newdata.floor, newdata.furniture],
        function (err) {
            if (err) {
                console.error(err.message);
                return next(err);
            }
            // İlan oluşturulduktan sonra /user/list/advert URL'sine yönlendirme
            res.redirect("/user/list/advert");
        }
    );
};