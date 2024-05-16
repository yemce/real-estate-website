const data=require("../model/data");

exports.homePage = (req,res,next)=>{
    res.render("user/home-page",{pageTitle:"Ana Sayfa"});

}

exports.list_advert= (req,res,next)=>{
    res.render("user/list-advert",{pageTitle:"İlan Sayfası",data:data});
}

exports.view_advert= (req,res,next)=>{
     //console.log(req.params.id);
     const oldData=data.find(x=>x.id==req.params.id);
     //console.log(oldData);
     res.render("user/view-advert",{pageTitle:"İlan Başlığı",
                                 data:oldData
                             });
}

exports.get_addAdvert= (req,res,next)=>{
    res.render("user/add-advert",{pageTitle:"İlan Ekle "})
}

exports.post_addAdvert = (req, res, next) => {
    const body = req.body;

    const newdata = {
        id: data.length + 1,
    title: body.title || "",
    explain: body.explain || "",
    price: body.price || "",
    image: body.image || "", // Eğer resim verisi yoksa boş bir dize olarak atanacak
    phone: body.phone || "", // Eğer telefon verisi yoksa boş bir dize olarak atanacak
    city: body.city || "",
    status: body.status || "", // Eğer durum verisi yoksa boş bir dize olarak atanacak
    meters: body.meters || "", // Eğer metre kare verisi yoksa boş bir dize olarak atanacak
    rooms: body.rooms || "", // Eğer oda sayısı verisi yoksa boş bir dize olarak atanacak
    floor: body.floor || "", // Eğer kat verisi yoksa boş bir dize olarak atanacak
    furniture: body.furniture || "", 
    };

    data.push(newdata);

    // İlan oluşturulduktan sonra /user/list/advert URL'sine yönlendirme
    res.redirect("/user/list/advert");
};
