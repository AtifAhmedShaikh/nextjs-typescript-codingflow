import { Metadata } from "next";
export function generateMetadata({ params }: any) {
  return {
    title: `UsersById ${params.id}}`,
  };
}

const UserById = ({ params }: { params: any }) => {
  return <div>UserById {params.id} </div>;
};

export default UserById;
