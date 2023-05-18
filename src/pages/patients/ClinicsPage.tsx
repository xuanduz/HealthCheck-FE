import { Card, Typography } from "@material-tailwind/react";
import banner from "../../assets/images/banner-2.png";
import ContainerComponent from "../../components/ContainerComponent";
import FilterForm, { InputFilter } from "../../components/FilterForm";
import { useState, useEffect } from "react";
import CardComponent from "../../components/CardComponent";
import {
  useRecoilStateLoadable,
  useRecoilValueLoadable,
  useSetRecoilState,
} from "recoil";
import { ClinicType, CodeType, defaultPageInfo } from "../../data/types.data";
import {
  clinicAtom,
  clinicSelector,
} from "../../data/recoil/patient/clinic.patient";
import { provincesSelector } from "../../data/recoil/commonData";
import EmptyClinic from "../../assets/images/empty-clinic.png";
import Pagination from "../../components/PaginationComponent";

const ClinicsPage = () => {
  // const [listClinics, setFilterClinic] = useRecoilStateLoadable(clinicSelector);
  const setFilterClinic = useSetRecoilState(clinicAtom(defaultPageInfo));
  const listClinicLoadable = useRecoilValueLoadable(clinicSelector);
  const provinces = useRecoilValueLoadable(provincesSelector);
  const [listProvinces, setListProvinces] = useState<CodeType[]>([]);
  const [listClinics, setListClinics] = useState<ClinicType[]>([]);

  useEffect(() => {
    if (provinces?.state == "hasValue") {
      setListProvinces([
        { id: 0, key: "", type: "", value: "Tất cả" },
        ...provinces?.contents?.data?.data,
      ]);
    }
  }, [provinces.state]);

  useEffect(() => {
    if (listClinicLoadable?.state == "hasValue") {
      setListClinics(listClinicLoadable?.contents?.data?.data);
    }
  }, [listClinicLoadable]);

  const handleFilter = ({ ...params }) => {
    const data = { ...params };
    setFilterClinic({
      ...defaultPageInfo,
      clinicName: data?.name,
      provinceKey: data?.provinceKey,
    });
  };

  return (
    <>
      <div className="clinics-banner relative">
        <img src={banner} alt="" />
        <Typography
          variant="h1"
          className="text-blue-500 absolute bottom-2/4 left-0 right-0 text-center"
        >
          Cơ sở y tế
        </Typography>
      </div>
      <ContainerComponent>
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
                  listProvinces={listProvinces}
                  handleSubmitFilterForm={handleFilter}
                />
              </div>
            </Card>
          </div>
          <div className="clinics-content basis-3/4">
            <Typography variant="h3" className="mt-4">
              Danh sách cơ ở y tế
            </Typography>
            <div>
              <ul className="grid grid-cols-3 gap-5 mt-2">
                {listClinics?.map((clinic: ClinicType, index: number) => (
                  <li className="basis-1/3">
                    <CardComponent
                      key={index}
                      id={index}
                      url={`/clinics/${clinic?.id}`}
                      title={clinic?.name}
                      describe={clinic?.describe}
                      address={clinic?.provinceData?.value}
                      image={clinic?.image || EmptyClinic}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center my-10">
              {/* <Pagination /> */}
            </div>
          </div>
        </div>
      </ContainerComponent>
    </>
  );
};

export default ClinicsPage;
