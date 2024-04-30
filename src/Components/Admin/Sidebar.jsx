import React from "react";
import "./Sidebar.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import PostAddIcon from "@mui/icons-material/PostAdd";
import AddIcon from "@mui/icons-material/Add";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import RateReviewIcon from "@mui/icons-material/RateReview";
import { TreeView } from "@mui/x-tree-view/TreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <Link to="/">
          <img src={logo} alt="Ecommerce" />
        </Link>

        <Link to="/admin/dashboard">
          <p>
            <DashboardIcon />
            Dashboard
          </p>
        </Link>

        <Link>
          <TreeView
            defaultCollapseIcon={<ExpandCircleDownIcon />}
            defaultExpandIcon={<ImportExportIcon />}
          >
            <TreeItem nodeId="1" label="Products">
              <Link to="/admin/products">
                <TreeItem nodeId="2" label="All" icon={<PostAddIcon />} />
              </Link>
              <Link to="/admin/product/new">
                <TreeItem nodeId="3" label="Create" icon={<AddIcon />} />
              </Link>
            </TreeItem>
          </TreeView>
        </Link>

        <Link to="/admin/orders">
          <p>
            <ListAltIcon />
            Orders
          </p>
        </Link>
        <Link to="/admin/users">
          <p>
            <PeopleIcon /> Users
          </p>
        </Link>

        <Link to="/admin/reviews">
          <RateReviewIcon />
          Reviews
        </Link>
      </div>
    </>
  );
}

export default Sidebar;
