import firebase from "../../firebase/firebase.js";
import axios from "axios";

const Send = () => {
  console.log("SENDING..");
  const currentUser = firebase.auth.currentUser.toJSON();

  console.log(currentUser);
  const { displayName, email, uid, photoURL } = currentUser;
  const user = {
    name: displayName,
    email,
    uid,
    profilePicture: photoURL
  };

  let url = "http://uffizzisample-backend-latest.staging.backend-zhgj1f.qa.app.uffizzi.cloud:9000/api/users";

  // deleteUserFromDB();
  localStorage.setItem("uid", JSON.stringify(user.uid));
  localStorage.setItem("user", JSON.stringify(user));
  axios
    .post(`${url},${user}`)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
};

export default Send;
