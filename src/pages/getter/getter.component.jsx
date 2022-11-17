import { GetterContainer } from "./getter.styles";
import GetterHeader from "../../components/Getter/header-getter/getter-header.component";
import GetterBanner from "../../components/Getter/getter-banner/getter-banner.component";
import GetterTable from "../../components/Getter/getter-table/getter-table.component";
import GetterTableData from "../../components/Getter/getter-table-data/getter-table-data.component";

const Getter = () => (
  <GetterContainer>
    <GetterHeader />
    <GetterBanner />
    {/* <GetterTable /> */}
    <GetterTableData />
  </GetterContainer>
);

export default Getter;
