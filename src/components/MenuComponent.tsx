import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {IoIosArrowForward} from 'react-icons/io';

const MenuComponent = () => {
    const [activeItem, setActiveItem] = useState("Anasayfa");

    const handleMenuClick = (itemName: string) => {
        setActiveItem(itemName);
        if (itemName === activeItem)
            setActiveItem("");
    };

    return (
        <div className="menu">
            <div className="menu-logo">
                <img src="https://fakeimg.pl/70x70" alt=""/>
                <span className="logo-title">Business Title</span>
            </div>
            <div className="menu-body">
                <div className="menu-subject"></div>
                <Link
                    to="/"
                    className={`menu-item-container ${activeItem === "Anasayfa" ? "active" : ""}`}
                    onClick={() => handleMenuClick("Anasayfa")}
                >
                    <div className="menu-item-container-top">
                        <span className="menu-item">
                            Anasayfa
                        </span>
                    </div>
                </Link>

                <Link
                    to="/"
                    className={`menu-item-container ${activeItem === "Şirket Bilgileri" ? "active" : ""}`}
                    onClick={() => handleMenuClick("Şirket Bilgileri")}
                >
                    <div className="menu-item-container-top">
                        <span className="menu-item">
                            Şirket Bilgileri
                        </span>
                    </div>
                </Link>

                <div
                    className={`menu-item-container ${activeItem === "Label" ? "active" : ""}`}
                    onClick={() => handleMenuClick("Label")}
                >
                    <div className="menu-item-container-top">
                        <span className="menu-item">
                            Label
                        </span>
                        <IoIosArrowForward className={`menu-item-icon ${activeItem === "Label" ? "active" : ""}`}/>
                    </div>
                    <div className={`menu-item-container-bottom ${activeItem === "Label" ? "active" : ""}`}>
                        <ul>
                            <li className={"menu-item"}><Link to={""}>item-1</Link></li>
                            <li className={"menu-item"}><Link to={"/"}>item-2</Link></li>
                            <li className={"menu-item"}><Link to={"/"}>item-3</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuComponent;
