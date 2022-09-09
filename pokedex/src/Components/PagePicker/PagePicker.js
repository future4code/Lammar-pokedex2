import React from "react"
import axios from 'axios';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PagePicker } from "./PagePickerStyle";



export function PagePickers (props){
    function topFunction() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    } 
    switch(props.pageNumber) {
        case 1:
            return(
                <PagePicker>
                    <div 
                        onClick={(e) => {
                            topFunction();
                            props.setPage(props.pageNumber + 1)}}
                    >
                    Próxima Página
                    </div>
                    <div 
                        onClick={(e) => {
                        topFunction();
                        props.setPage(45)}}
                    >
                    Última Página
                    </div>
                </PagePicker>
            )
            break;
        case 45:
            return(
                <PagePicker>
                    <div 
                        onClick={(e) => {
                            topFunction();
                            props.setPage(1)}}
                    >
                        Primeira Página
                    </div>
                    <div 
                        onClick={(e) => {
                        topFunction();
                        props.setPage(props.pageNumber - 1)}}
                    >
                        Página Anterior
                    </div>
                </PagePicker>                
            )
            break;
    }
    
return(

<PagePicker>
    <div 
        onClick={(e) => {
            topFunction();
            props.setPage(1)}}
    >
        Primeira Página
    </div>
    <div 
        onClick={(e) => {
            topFunction();
            props.setPage(props.pageNumber - 1)}}
    >
        Página Anterior
    </div>
    <div 
        onClick={(e) => {
            topFunction();
            props.setPage(props.pageNumber + 1)}}
    >
        Próxima Página
    </div>
    <div 
        onClick={(e) => {
            topFunction();
            props.setPage(45)}}
    >
        Última Página
    </div>
</PagePicker>
)
}

