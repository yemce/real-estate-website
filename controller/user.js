exports.homePage = (req,res,next)=>{
    res.render("user/home-page");

}

exports.list_advert= (req,res,next)=>{
    res.send("ilan listeleme sayfası");
}

exports.view_advert= (req,res,next)=>{
    res.send("ilana gözatma sayfası");
}

exports.add_advert= (req,res,next)=>{
    res.send("ilan ekleme sayfası");
}

