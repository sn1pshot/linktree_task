const express = require("express")
const LinkTreeRouter = express.Router()
const{create_linktree_link,create_category,create_link, getlinktreelink, getcategory, getalllinks, getlinksbycategory, updatelinktree, updateCat, updateLink, deletelinktree, deleteCat, deleteLink} = require("../controllers/controllers")

LinkTreeRouter.post('/post',create_linktree_link)
LinkTreeRouter.post('/category/post',create_category)
LinkTreeRouter.post('/links/post',create_link)

LinkTreeRouter.get('/get/:userId',getlinktreelink)
LinkTreeRouter.get('/category/get/:linktreelinkLinktreeid',getcategory)
LinkTreeRouter.get('/links/get/:linktreelinkLinktreeid',getalllinks)
LinkTreeRouter.get('/linksbycat/get/:categoryname',getlinksbycategory)

LinkTreeRouter.put('/put/:userId',updatelinktree)
LinkTreeRouter.put('/category/put/:linktreelinkLinktreeid',updateCat)
LinkTreeRouter.put('/link/put/:link_id',updateLink)

LinkTreeRouter.delete('/delete/:linktreeid',deletelinktree)
LinkTreeRouter.delete('/category/delete/:catid',deleteCat)
LinkTreeRouter.delete('/link/delete/:link_id',deleteLink)

module.exports=LinkTreeRouter;
