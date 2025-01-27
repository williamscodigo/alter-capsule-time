import DashboardLayout from "../components/DashboardLayout";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Auth from "../utils/auth";

export default function Dashboard() {

  // get user data from localStorage
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  //debugger; - console user data on login
console.log("user data: ", user);

    return (
      <DashboardLayout >
        <Header />
          <main>
            <h3>main content</h3>

            <p>display public capsules here!...</p>

            {Auth.loggedIn() ? (
              <>
              <p>you are logged in!</p>
              <p>get and display public capsules...</p>
              </>
            ) : ( 
              <p>you need to be logged in to see this content!</p>
            
            )}

          </main>
        <Footer />
      </DashboardLayout>
      
    )

}