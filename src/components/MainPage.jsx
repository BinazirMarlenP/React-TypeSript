import React from 'react';
import { Link } from "react-router-dom";

const MainPage = () => {
    return (
        <>
            <div>
                <section className='d-flex main-section container'>
                    <div className="row">
                    <div className='col-lg-6'>
                        <img src="http://www.harjaguna.com/harjaguna/wp-content/files_mf/1522138164DSC_7480ED.JPG"  style={{width:'580px'}} alt="" />
                    </div>
                    <div className="info-blog col-lg-6">
                        <h1 className='subtitle'>КРАТКО О КОМПАНИИ SGS</h1>
                        <p>
                                Какую пользу мы приносим обществу? Мы делаем мир лучше, безопаснее и технологичнее.

                                Независимо от вашего местоположения и вашей отрасли вы можете положиться на нас. Наша международная команда экспертов предоставит специализированные бизнес-решения, направленные на ускорение, упрощение и повышение эффективности вашей деятельности.

                                Мы оказываем услуги, которые помогают нашим клиентам улучшать их деятельность, снижать риски и запускать умные решения.</p>
                    </div>
                    </div>                    
                </section>
                <section className="departments">
                    <div className="container">
                        <div className='d-flex justify-content-center h-wrapper'>
                            <h2 className='text-center fs-36 subtitle'>Наша Миссия</h2>
                        </div>
                        <div className="dep d-flex">
                            <div className="dep-card">
                                <h4 className='text-center color-orange'>Безопасность</h4>
                                <p className='sgs-card-text'>Проведение экспертной оценки продукции и услуг гарантирует их соответствие требованиям национальных и международных стандартов и регламентов. </p>
                            </div>
                            <div className="dep-card">
                                <h4 className='text-center color-orange'>Технология</h4>
                                <p className='sgs-card-text'>Проведение экспертной оценки продукции и услуг гарантирует их соответствие требованиям национальных и международных стандартов и регламентов. </p>
                            </div>
                            <div className="dep-card">
                                <h4 className='text-center color-orange'> Качество </h4>
                                <p className='sgs-card-text'>Проведение экспертной оценки продукции и услуг гарантирует их соответствие требованиям национальных и международных стандартов и регламентов. </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="work">
                    <div className="container">
                        <div className='d-flex justify-content-center h-wrapper'>
                            <h2 className='text-center fs-36 subtitle'>Работа в СЖС</h2>
                        </div>
                        
                        <div className="row">
                            <div className="col-3">
                            <h4 className='color-orange'>Услуги  СЖС </h4> 
                               <p className='paragraph'>Структурно компания SGS подразделяется на девять департаментов, каждый из которых фокусируется на оказании услуг для определённой отрасли: агропромышленный комплекс, транспортный сектор, потребительский рынок и розничная торговля, экология и охрана труда, государственный сектор, промышленный сектор итд</p>
                            </div>
                            <div className="col-6">
                                <img src="https://media-exp1.licdn.com/dms/image/C4D22AQEpQIEyjSKLpw/feedshare-shrink_800/0/1640797225336?e=1662595200&v=beta&t=5nbKfM0miWZF9RIbv_jLmC7VWuqJCIYOBpsKTJ__214" alt=""  style={{width: '550px'}} className='m-auto'/>
                            </div>
                            <div className="col-3">
                                
                                <h4 className='color-orange'>Сотрудники в СЖС</h4> 
                                <ul>
                                    <Link to={"/contacts/list"}><li className='list'>Инфармационные технологии</li></Link>
                                    
                                    <li className='list'>Минерелы</li>
                                    <li className='list'>Финансы</li>
                                    <li className='list'>Химия</li>
                                    <li className='list'>Сектор нефти</li>
                                    <li className='list'>Государственный сектор</li>
                                    <li className='list'>Сектор нефти</li>
                                    <li className='list'>Промышленный сектор</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
               
            </div>
            
        </>
    );
};

export default MainPage;