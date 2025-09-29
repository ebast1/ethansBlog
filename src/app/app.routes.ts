import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomePage } from './components/home-page/home-page';
import { Projects } from './components/projects/projects';
import { Blog } from './components/blog/blog';
import { AboutMe } from './components/about-me/about-me';

export const routes: Routes = [

    {path: '', redirectTo: 'homePage', pathMatch: 'full'},
    {path: 'homePage', component: HomePage},
    {path: 'blog', component: Blog},
    {path: 'projects', component: Projects},
    {path: 'aboutMe', component: AboutMe},
];

