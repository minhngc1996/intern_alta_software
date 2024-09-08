import React, { useEffect } from 'react'
import './Services.css'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/store';
import { fecthServicesHome } from '../../../features/servicesHome/servicesHomeSlice';
const Services = () => {

      const dispatch = useDispatch<AppDispatch>();
      const {servicesHome, loading, error} = useSelector ((state: RootState) => state.serviceHome);
      useEffect(() => {
        dispatch(fecthServicesHome())
      }, [dispatch])
  return (
    <section className="services-section">
      <div className="header">
        <h4>LĨNH VỰC HOẠT ĐỘNG</h4>
        <h2>Các dịch vụ trọng tâm</h2>
        <hr style={{width:'220px', height:'6px', borderRadius:'100px', background: 'var(--blue-primary-600, #003F7D)'}}/>
        <p>3 dịch vụ trọng tâm của Phuthotourist là vui chơi giải trí, nhà hàng – khách sạn, và dịch vụ lữ hành</p>
      </div>
      <div className="services-container">
        {servicesHome.map((service) => (
          <div key={service.id} className="service-card">
            <img src={service.image} alt={service.title} className="service-image" />
            <div className="service-content">
              <h4 className="service-title">{service.title}</h4>
              <p className="service-description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
