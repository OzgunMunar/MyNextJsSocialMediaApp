import { ConnectToDB } from "@/dbConfig/dbConfig"
import Posts from "@/models/postModel"
import { NextResponse } from "next/server"


export const DELETE = async(req, {params}) => {

    try {
        
        ConnectToDB()

        const {id} = params
        
        await Posts.findByIdAndDelete(id)

        return NextResponse.json({success: "Post deleted."}, {status: 200})
            
    } catch (error) {
        return NextResponse.json({error: "An error occured!"}, {status: 500})
    }

}

export const PATCH = async(req, { params }) => {

    try {
        
        ConnectToDB()

        const { postId, postText } = await req.json()

        const seekingPost = await Posts.findById(postId)

        if(seekingPost === null)
            return NextResponse.json({error: "Post that you are looking for couldn't found."}, {status: 400})

        seekingPost.post = postText

        await seekingPost.save()

        return NextResponse.json({success: "Success when editing!"}, {status: 200})
        
    } catch (error) {
        return NextResponse.json({error: "An error occured when editing!"}, {status: 500})
    }

}