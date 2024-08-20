import { Card } from "../common/Card";
import { CardLarge } from "../common/CardLarge";

export const Skills = () => {
  return (
    <div  className="sm:-space-y-48 space-y-4 sm:space-x-7">
      <div className="grid sm:grid-cols-3 grid-flow-row gap-4">
        <Card
          title="⌨️ Lenguages"
          src="https://skillicons.dev/icons?i=cs,java,python,js&perline=4"
        />
        <Card
          title="🖥️ Front-End"
          src="https://skillicons.dev/icons?i=css,html,react,bootstrap,tailwind&perline=5"
        />
        <Card
          title="🚧 Back-End"
          src="https://skillicons.dev/icons?i=dotnet,spring&perline=4"
        />
        <Card
          title="🛢️ Databases"
          src="https://skillicons.dev/icons?i=mongodb,mysql,postgres&perline=4"
        />
      </div>
      <div className="sm:relative sm:left-96 ">
        <CardLarge
          title="🚧 Extras"
          src="https://skillicons.dev/icons?i=git,github,arch,bash,blender,discord,docker,gitlab,gmail,idea,linkedin,linux,ps,postman,pycharm,selenium,tensorflow,ubuntu,visualstudio,vscode,windows&perline=13"
        />
      </div>

    </div>
  );
};
