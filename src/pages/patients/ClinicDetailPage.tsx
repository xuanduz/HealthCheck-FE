import { Card, Typography } from "@material-tailwind/react";
import banner from "../../assets/images/banner-2.png";
import { CiLocationOn } from "react-icons/ci";
import ContainerComponent from "../../components/ContainerComponent";
import SmallContainerComponent from "../../components/SmallContainerComponent";

const ClinicDetailPage = () => {
  return (
    <>
      <div className="clinics-banner relative">
        <img src={banner} alt="" />
        <Typography
          variant="h1"
          className="text-blue-500 absolute bottom-2/4 left-0 right-0 text-center"
        >
          Chi tiết cơ sở y tế
        </Typography>
      </div>
      <SmallContainerComponent>
        <div className="clinic-detail mt-4 mb-4">
          <div className="flex flex-col items-center introduce">
            <Card className="mb-5 w-4/6 overflow-hidden">
              <img
                alt="clinic"
                className="h-[32rem] w-full object-cover object-center"
                src="https://bcp.cdnchinhphu.vn/Uploaded/dangthucuc/2021_04_30/bvbm.jpg"
              />
            </Card>
            <Typography variant="h2">Bệnh viện Bạch Mai</Typography>
            <p className="italic flex gap-1">
              <CiLocationOn className="mt-1"></CiLocationOn>
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <p className="italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, nemo!
            </p>
          </div>
          <div className="description mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            nesciunt sequi voluptate saepe modi, ad iste pariatur porro
            doloribus nisi reiciendis, error eos, repellat repellendus
            dignissimos. Suscipit eligendi maiores vero officia, provident ad
            libero repudiandae iure esse similique laboriosam unde consectetur
            architecto alias quaerat cupiditate possimus temporibus voluptate,
            quae tenetur fugit reiciendis sequi? Optio perspiciatis cumque fuga!
            Delectus quasi voluptates sint quisquam, recusandae quis laborum
            assumenda quam dolores molestias animi suscipit voluptatibus fugiat
            unde! Iste, excepturi quam? Illum, autem eum fugiat sit beatae
            recusandae atque aspernatur consequatur quisquam quaerat, omnis ea
            cum facere totam. Numquam vero sint veritatis esse ullam earum fugit
            alias laborum voluptatibus. Ullam repellendus voluptates temporibus
            veritatis accusamus dicta delectus velit nobis cum sunt unde,
            suscipit saepe quos id dolores alias necessitatibus quibusdam quis
            praesentium ipsum nisi. Asperiores nobis vero porro sed consequatur
            tempora a earum animi maxime adipisci et molestias, impedit, eum
            <img
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
              alt=""
            />
            quibusdam totam quidem dolor. Laudantium quaerat magni accusantium
            at perferendis ipsum repellendus sint cum, unde praesentium minima
            laboriosam sapiente architecto ad harum suscipit ab recusandae
            soluta sit quam illum. Dolores neque harum veniam necessitatibus
            labore quae, ex expedita eos tempore quibusdam mollitia. Nobis
            inventore modi deserunt? In architecto consequuntur fugiat quisquam
            quam! Temporibus perferendis voluptate in quaerat commodi numquam
            aperiam rerum? Voluptas repellat cupiditate provident quod quaerat
            aliquam, adipisci, deserunt iste quae numquam eum assumenda fugit
            quidem aut, quo qui. Quis, ipsum ut accusamus error nihil temporibus
            tempora laudantium voluptate itaque. Quae ducimus voluptas sunt
            eveniet veritatis unde expedita impedit repellendus cumque fuga
            voluptates facere atque delectus assumenda vero inventore aliquam
            facilis nostrum rerum iure, soluta laborum aspernatur ipsa commodi.
            Ut, dignissimos, debitis molestias ea sunt earum expedita voluptate
            ducimus, illum labore repellendus exercitationem ex nostrum sed
            ipsum? Officiis atque dicta corporis itaque soluta aliquid, sapiente
            distinctio laboriosam magni delectus tempore est fugiat quisquam
            beatae totam asperiores minus mollitia, ab vero veritatis! Voluptas
            quo qui ut voluptate consequatur perspiciatis voluptates eos
            mollitia fugiat quod molestias veritatis natus doloremque odio ullam
            iure nostrum, harum neque? Autem, laboriosam! Nesciunt molestiae
            ducimus explicabo ab, cumque adipisci aut quod consequatur? Possimus
            explicabo quos corporis saepe et quaerat itaque eveniet quam! Id
            consequatur sequi ratione eveniet voluptate neque porro impedit
            veritatis tempore quam ducimus placeat doloribus sapiente beatae
            aperiam excepturi, facilis eaque facere saepe optio? Iure quam
            tempora laborum, aliquid nobis expedita alias perspiciatis
            laudantium vel cum quibusdam temporibus beatae tenetur quis optio ex
            qui soluta sapiente velit quidem veritatis aperiam aspernatur
            obcaecati! Sequi voluptate quaerat nisi! Odio reprehenderit at
            tempora voluptates et. Dignissimos nostrum, officia adipisci
            sapiente molestias delectus repellat iste tenetur nesciunt nemo
            doloremque quaerat nam, nisi ea. Recusandae, eos illum. Numquam non
            eius iusto vero assumenda sapiente sit optio consequatur cumque odio
            perferendis deserunt nostrum unde, dolor veritatis atque alias quasi
            vitae quod? Eveniet fugit temporibus autem voluptates tempora
            reiciendis iusto ab id minus pariatur eligendi veniam quas dolores
            ducimus, saepe natus nostrum. Necessitatibus, sapiente quo commodi
            nihil eveniet officiis fuga odit quisquam eum maxime perferendis
            rerum corporis illum eaque molestias expedita numquam magni totam
            nostrum!
          </div>
        </div>
      </SmallContainerComponent>
    </>
  );
};

export default ClinicDetailPage;
