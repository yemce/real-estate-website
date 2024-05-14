const dataAnc = require("../model/data");

exports.addAnc=(req,res,next)=>{
    const data = {
        title:"Add Anc",
        contentTitle:"Duyuru Ekleme Sayfası"
    }
    res.render("admin/add_anc",{data:data});
}

exports.listAnc = (req,res,next)=>{
    const data = {
        title:"List Anc",
        contentTitle:"Duyuru Listeleme Sayfası"
    }
    res.render("admin/list_anc",{dataAnc:dataAnc,data:data})

}