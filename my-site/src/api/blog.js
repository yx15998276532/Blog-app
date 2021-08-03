import request from "./request";
/**
 * 
 * 
 * 获取博客数据列表
 */
export async function getBlogs(page = 1, limit = 10, categoryid = -1){
    //console.log(page,limit,categoryid);
    return await request.get("/api/blog", {
        params:{
            page,
            limit,
            categoryid,
        },
    });
}

/**
 * 获取博客分类 
 * 
 */
export async function getBlogsTypes(){
    return await request.get("/api/blogtype");
}


/**
 * 获取单个个人博客
 * :id为个人博客的ID
 * */ 
export async function getOneBlog(id){
    return await request.get("/api/blog/${id}")
}


/*
提交评论
*/
export async function postComment(commentInfo){
    return await request.post("/api/comment",commentInfo)
}


/*
分页获取评论

*/                    
export async function getComments( blogid, page = 1, limit = 10 ){
    return await request.get("/api/comment",{
        params:{
        page, limit, blogid
    } 
})
}

