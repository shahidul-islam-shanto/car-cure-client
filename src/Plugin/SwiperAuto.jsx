

const SwiperAuto = () => {
 

  return (
    <div className="py-10 bg-nu40">
      <Swiper {...params}>
        <div>
          <img className="py-10" src={banner1} alt="" />
        </div>
        <div>
          <img src={banner2} alt="" />
        </div>
        <div>
          <img src={banner3} alt="" />
        </div>
        <div>
          <img src={banner4} alt="" />
        </div>
        <div>
          <img src={banner5} alt="" />
        </div>
        <div>
          <img src={banner6} alt="" />
        </div>
      </Swiper>
    </div>
  );
};

export default SwiperAuto;
