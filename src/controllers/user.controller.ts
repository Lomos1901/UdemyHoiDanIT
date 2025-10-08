import { Request, Response } from "express";
import { handleCreateUser } from "../services/user.service";
const getHomePage = (req: Request, res: Response) => {
    return res.render("home.ejs");
}   


const getCreateUserPage = (req: Request, res: Response) => {
    return res.render("create-user.ejs");
}
const postCreateUserPage = (req: Request, res: Response) => {
    const {fullname, email, address} = req.body;
    handleCreateUser(fullname, email, address);

    return res.redirect("/");
}

export {getHomePage, getCreateUserPage, postCreateUserPage};