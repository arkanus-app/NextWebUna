"use server"

import { cookies } from "next/headers";
import Client from "discord-oauth2-api";

export default function handler(req, res) {
    const { code } = req.query;
    if (!code) return res.status(400).json({ error: "No code provided" });
    auth(code).then((data) => {
        create(data);
        res.redirect("/");
    }).catch((err) => {
        console.log(err);
        res.status(500).json({ error: "An error occured" });
    }
    );
}



async function create(data) {
    cookies().set({
      name: 'name',
      value: data
    })
  }

function auth(code) {
    const client = new Client({
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        scopes: ["identify", "guilds", "guilds.members.read"],
        redirectURI: `http://localhost:3000/api/auth`
    });
    return client.getAccessToken(code);
}