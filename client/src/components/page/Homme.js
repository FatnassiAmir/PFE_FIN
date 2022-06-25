import HeroSection from '../../components/element_component/HeroSection/HeroSection'
import SimpleSlid from '../element_component/slider/simpleSlid/SimpleSlid'
import MultiSlid from '../element_component/slider/multiSlid/MultiSlid';
import Categrie from '../element_component/Categorie/Categorie'
import man2 from '../image/man2.jpg'
import man3 from '../image/man3.jpg'
import ma1 from '../image/hero4.gif'
import ma2 from '../image/ma2.jpg'
import ma3 from '../image/hero6.gif'

import { useEffect } from 'react';
import {useDispatch, useSelector } from "react-redux";
import { getProducts } from '../../redux/shopping/shopping-action'

const Homme = () => {
    

    const categories = [
        {
            categ: 'Pants',
            icon: 'assets/pants.jpg'
        },
        {
            categ: 'Ti-shert',
            icon: 'assets/tshirt.jpg'
        },
        {
            categ: 'Shoes',
            icon: 'assets/shoes.jpg'
        },
        {
            categ: 'Suits',
            icon: 'assets/suit.jpg'
        },
        {
            categ: 'Shorts',
            icon: 'assets/shorts.jpg'
        }
    ];

    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getProducts('homme'))
    }, [dispatch])
    
      const products = useSelector((state) => state.shop.products);

    return (
        <>
            <HeroSection 
                image={man3} 
                mTitle='Shop jewellery handmade in Sydney' 
                title='vaconcy mode'
                position='left'
                buttonStyle='btn--outline2'
                buttonSize='btn--medium'
            />
            <Categrie categories={categories} homme='1'/>
            <SimpleSlid
                image1={ma1}
                image2={ma2}
                image3={ma3}
            />
            <HeroSection 
                image={man2} 
                mTitle='Shop jewellery handmade in Sydney' 
                title='vaconcy mode'
            />
            <MultiSlid products={products}/>
        </>
    )
}

export default Homme
