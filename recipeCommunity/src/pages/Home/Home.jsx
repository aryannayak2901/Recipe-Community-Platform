import React, {useState, useEffect} from "react";
import { Hero, CategoryList, FeaturedRecipes, InteractiveCookingGuides, LiveCookingClasses, SocialCommunity } from "../../components";

function Home()
{
    return (
        <>
            <Hero />
            <CategoryList />
            <FeaturedRecipes />
            <InteractiveCookingGuides />
            <LiveCookingClasses />
            <SocialCommunity />
        </>
    )
}

export default Home;