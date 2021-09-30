import { FC } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const Main: FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '0px',
    centerMode: true,
    pauseOnHover: true,
  };

  const sliders = [
    { id: 1, image: '../../image/mapoSchoolProgram.jpg', link: '/' },
    { id: 2, image: '../../image/coffeeLesson.jpg', link: '/' },
    { id: 3, image: '../../image/lecture.jpg', link: '/' },
  ];

  return (
    <div className="">
      <div className=" container md:px-32 mx-auto">
        <Slider {...settings}>
          {sliders.map((slide) => {
            return (
              <div className="">
                <img className="w-full h-full" src={slide.image} />
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="container mx-auto">
        <div className="px-36 py-16 md:py-24">
          <div className="flex flex-col md:flex-row flex-wrap">
            <div className="flex-1 section-description md:mr-6">
              <div className="w-full">
                <h2 className="text-4xl font-bold leading-relaxed">
                  유연하게
                  <span className="block">프로페셔널하게</span>
                  <span className="block">일해요</span>
                </h2>
                <p className="mt-4 mb-8 md:mb-4 text-lg leading-relax">
                  <strong>매일 새로 올라오는 </strong>
                  <span className="block lg:hidden"></span>
                  <strong>커리어 기회</strong>를 확인하고
                  <span className="block"></span>
                  원하는 방식으로 당신의 일을
                  <span className="block"></span>
                  계속 이어가세요.
                </p>
                <Link
                  to="/"
                  className=" text-center py-3 cursor-pointer btn-lg-one hidden md:block hover:filter hover:brightness-90"
                >
                  채용공고 둘러보기
                </Link>
              </div>
            </div>
            <div className="flex-1 md:flex-shrink md:w-auto flex flex-wrap flex-col">
              <img src="../../image/recruitmentPage.PNG" alt="채용 페이지" />
              <Link
                to="/"
                className="btn btn-lg-two btn-lg-three block md:hidden w-full mt-12 hover:filter hover:brightness-90 bg-[#6d96f5] text-white"
              >
                채용공고 둘러보기
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#6d96f5] mx-0 bg-opacity-20">
        <div className="container mx-auto">
          <div className="px-36 py-16 md:py-24">
            <div className="flex flex-col md:flex-row flex-wrap">
              <div className="flex-1 section-expert md:order-2">
                <div className="w-full md:pl-52">
                  <h2 className="text-4xl font-bold leading-relaxed">
                    채용 전문가에게
                    <span className="block">당신의 경력을</span>
                    <span className="block">알려주세요</span>
                  </h2>
                  <p className="mt-4 mb-8 md:mb-4 text-lg leading-relax">
                    <strong>10분만 투자</strong>해서 간단한 프로필만
                    입력해보세요.
                    <span className="block"></span>
                    마포구 채용팀이 상담 후{' '}
                    <strong>적합한 기업과 포지션</strong>을
                    <span className="block"></span>
                    추천합니다. 물론 인터뷰와 추천 모두
                    <strong> 무료</strong>
                    입니다.
                  </p>
                  <Link
                    to="/"
                    className=" text-center py-3 cursor-pointer btn-lg-one hidden md:block hover:filter hover:brightness-90"
                  >
                    기본 프로필 작성하기
                  </Link>
                </div>
              </div>
              <div className="flex-1 md:flex-shrink md:w-auto flex flex-wrap flex-col">
                <img src="../../image/recruitmentPage.PNG" alt="채용 페이지" />
                <Link
                  to="/"
                  className="btn btn-lg-two btn-lg-three block md:hidden w-full mt-12 hover:filter hover:brightness-90 bg-[#7c9ff2] text-white"
                >
                  기본 프로필 작성하기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#6d96f5] mx-0 bg-opacity-10">
        <div className="container mx-auto">
          <div className="px-36 py-16 md:py-24">
            <div className="flex flex-col md:flex-row flex-wrap">
              <div className="flex-1 section-description md:mr-6">
                <div className="w-full">
                  <h2 className="text-4xl font-bold leading-relaxed">
                    커리어 고민을 나눌
                    <span className="block">전문가를 찾고 계신가요?</span>
                  </h2>
                  <p className="mt-4 mb-8 md:mb-4 text-lg leading-relax">
                    막상 다시 일을 시작하려니
                    <span className="block"></span>
                    뭐부터 준비할지 막막하세요?
                    <span className="block"></span>
                    <strong>1:1 상담을 신청</strong>
                    하고 무엇이든 물어보세요.
                  </p>
                  <Link
                    to="/"
                    className=" text-center py-3 cursor-pointer btn-lg-one hidden md:block hover:filter hover:brightness-90"
                  >
                    상담 신청하기
                  </Link>
                </div>
              </div>
              <div className="flex-1 md:flex-shrink md:w-auto flex flex-wrap flex-col">
                <img src="../../image/recruitmentPage.PNG" alt="채용 페이지" />
                <Link
                  to="/"
                  className="btn btn-lg-two btn-lg-three block md:hidden w-full mt-12 hover:filter hover:brightness-90 bg-[#6d96f5] text-white"
                >
                  상담 신청하기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
