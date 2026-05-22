import { Link } from "react-router-dom";

const Sidebar = () => {

    return (
        <div className="w-64 bg-green-800 text-white p-5">

            <h1 className="text-2xl font-bold mb-10">
                Food Waste
            </h1>

            <div className="flex flex-col gap-4">

                <Link to="/dashboard">
                    Dashboard
                </Link>

                {/* ADMIN + OPERATOR */}
                    <>
                        <Link to="/donors">
                            Donors
                        </Link>

                        <Link to="/waste">
                            Waste Items
                        </Link>

                        <Link to="/centers">
                            Centers
                        </Link>

                        <Link to="/processors">
                            Processors
                        </Link>

                        <Link to="/reports">
                            Reports
                        </Link>
                    </>
            </div>

        </div>
    );
};

export default Sidebar;