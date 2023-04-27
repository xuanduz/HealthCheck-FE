import { Card, Typography } from "@material-tailwind/react";
import ContainerComponent from "../../components/ContainerComponent";
import banner from "../../assets/images/banner-2.png";
import { CiLocationOn } from "react-icons/ci";
import FilterForm, { InputFilter } from "../../components/FilterForm";
import { useState } from "react";
import CardComponent from "../../components/CardComponent";
import SmallContainerComponent from "../../components/SmallContainerComponent";

const SpecialtyDetailPage = () => {
  const [filter, setFilter] = useState<InputFilter>();
  return (
    <>
      <div className="specialty-banner relative">
        <img src={banner} alt="" />
        <Typography
          variant="h1"
          className="text-blue-500 absolute bottom-2/4 left-0 right-0 text-center"
        >
          Chuyên khoa xương khớp
        </Typography>
      </div>
      <ContainerComponent>
        <div className="clinic-detail mt-4 mb-4">
          <div className="text-center introduce">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, nemo! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Veniam vero aperiam est accusamus, animi quaerat
              esse harum optio. Sed, corrupti.
            </p>
          </div>
          <div className="flex gap-10">
            <div className="clinics-filter basis-1/4">
              <Typography variant="h3" className="mt-4">
                Bộ lọc
              </Typography>
              <Card className="p-4 shadow-xl mt-2">
                <div>
                  <FilterForm
                    haveName={true}
                    haveProvince={true}
                    havePrice={true}
                    handleSubmitFilterForm={setFilter}
                  />
                </div>
              </Card>
            </div>
            <div className="clinics-content basis-3/4">
              <Typography variant="h3" className="mt-4">
                Danh sách bác sĩ
              </Typography>
              <div>
                <ul className="grid grid-cols-3 gap-5 mt-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(
                    (item: any, index: number) => (
                      <li className="basis-1/3">
                        <CardComponent
                          key={index}
                          id={index}
                          url={`/doctors/${index}`}
                          title="Bác Văn Sĩ"
                          describe="Phó giáo sư, tiến sĩ"
                          address="Ha Noi"
                          price="100.000đ"
                          image="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
                        />
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </ContainerComponent>
    </>
  );
};

export default SpecialtyDetailPage;
