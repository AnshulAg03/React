import React, { Component } from 'react';

import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';

import Title from './Title';

export default class Services extends Component {

state={
    services:[
        {
            icon:<FaCocktail />,
            title:"Free Cocktails",
            info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id justo efficitur elit accumsan volutpat et vitae urna. Curabitur venenatis a quam ut euismod. Nam nec sagittis libero, at mattis justo. Donec vel est vitae enim blandit tristique."
        },
        {
            icon:<FaHiking />,
            title:"Endless Hiking",
            info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id justo efficitur elit accumsan volutpat et vitae urna. Curabitur venenatis a quam ut euismod. Nam nec sagittis libero, at mattis justo. Donec vel est vitae enim blandit tristique."
        },
        {
            icon:<FaShuttleVan />,
            title:"Free Shuttle",
            info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id justo efficitur elit accumsan volutpat et vitae urna. Curabitur venenatis a quam ut euismod. Nam nec sagittis libero, at mattis justo. Donec vel est vitae enim blandit tristique."
        },
        {
            icon:<FaBeer />,
            title:"Strongest Beer",
            info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id justo efficitur elit accumsan volutpat et vitae urna. Curabitur venenatis a quam ut euismod. Nam nec sagittis libero, at mattis justo. Donec vel est vitae enim blandit tristique."
        }
        
    ]
}
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index)=>{
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
