import { useEffect,useState } from "react";
import {useNavigate } from "react-router-dom";
import { getProtected } from "../../apis/server";
import { NavbarDashboard } from "../../components/NavbarDashboard/NavbarDashboard";
import './Dashboard.css';

export const Dashboard = () => {
    const [message, setMessage] = useState<string>("");
    const [user, setUser] = useState<string>("");
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token')!;
        getProtected(token)
            .then(res => {
                const { message, user } = res.data;
                setMessage(message)
                setUser(user);
            })
            .catch(() => {
                localStorage.removeItem('token');
                navigate('/login');
            });
    }, [navigate]);
    return (
        <>
          
          <section className="container-dashboard">
               <NavbarDashboard user={user} message={message} />

          </section>

        </>
    )
}