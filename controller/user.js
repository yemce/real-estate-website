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

exports.add_advert= (req,res,next)=>{
    res.send("ilan ekleme sayfası",{pageTitle:"İlan Ver"});
}

