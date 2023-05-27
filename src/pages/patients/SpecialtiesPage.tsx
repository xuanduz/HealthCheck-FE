import { Card, Typography } from "@material-tailwind/react";
import banner from "../../assets/images/banner-2.png";
import ContainerComponent from "../../components/ContainerComponent";
import FilterForm, { InputFilter } from "../../components/FilterForm";
import { useState, useEffect } from "react";
import CardComponent from "../../components/CardComponent";
import { useRecoilValueLoadable, useSetRecoilState } from "recoil";
import { specialtiesSelector } from "../../data/recoil/commonData";
import { SpecialtyType, defaultPageInfo } from "../../data/types.data";
import EmptySpecialty from "../../assets/images/empty-specialty.png";
import { PaginationData } from "../../components/PaginationComponent";
import { specialtyAtom } from "../../data/recoil/admin/specialty.admin";
import { speciatyPatientSelector } from "../../data/recoil/patient/specialty.patient";

const SpecialtiesPage = () => {
  const setFilterClinic = useSetRecoilState(specialtyAtom(defaultPageInfo));
  const listClinicLoadable = useRecoilValueLoadable(speciatyPatientSelector);

  const [paginationData, setPaginationData] = useState<PaginationData>();
  const [listSpecialties, setListSpecialties] = useState<SpecialtyType[]>([]);
  const [filter, setFilter] = useState<InputFilter>();

  useEffect(() => {
    if (listClinicLoadable?.state == "hasValue") {
      const data = listClinicLoadable?.contents?.data?.data;
      setListSpecialties(data);
    }
  }, [listClinicLoadable.state]);

  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="specialties-banner relative">
        <img src={banner} alt="" />
        <Typography
          variant="h1"
          className="text-blue-500 absolute bottom-2/4 left-0 right-0 text-center"
        >
          Chuyên khoa
        </Typography>
      </div>
      <ContainerComponent>
        <div className="flex gap-10">
          <div className="specialties-filter basis-1/4">
            <Typography variant="h3" className="mt-4">
              Bộ lọc
            </Typography>
            <Card className="p-4 shadow-xl mt-2">
              <div>
                <FilterForm haveName={true} handleSubmitFilterForm={setFilter} />
              </div>
            </Card>
          </div>
          <div className="specialties-content basis-3/4">
            <Typography variant="h3" className="mt-4">
              Các chuyên khoa
            </Typography>
            <div>
              <ul className="grid grid-cols-3 gap-5 mt-2">
                {listSpecialties?.map((item: SpecialtyType, index: number) => (
                  <li className="basis-1/3">
                    <CardComponent
                      key={item?.id}
                      url={`/specialties/${item?.id}`}
                      title={item?.name}
                      describe={item?.describe}
                      image={item?.image || EmptySpecialty}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </ContainerComponent>
    </>
  );
};

export default SpecialtiesPage;
