import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import bg_image from "../images/bg-image.jpg";
import { projectFirestore } from "../firebase/config";

const LederBoard = () => {
  let [nickname, setNickName] = useState("");
  let [score, setScore] = useState(0);
  let [dataForm, setDataForm] = useState([]);

  const styles = {
    backgroundImage: `url(${bg_image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "100vh"
  };

  const submitHackerForm = (e) => {
    e.preventDefault();

    setDataForm([...dataForm, { name_nick: nickname, score_value: score }]);

    const finnalyDataDb = {
      nickname : nickname,
      score : score
    }

    projectFirestore.collection("data-hackers").add(finnalyDataDb);

  };

  return (
    <div style={styles} className="mt-1">
      <NavBar />
      <form
        onSubmit={submitHackerForm}
        className="flex flex-col justify-center items-center border-2 border-black border-solid mt-16 h-64 bg-blue-950"
      >
        <h2 className="text-xl mt-3 text-white border-b-2 border-solid border-white">
          Add Hacker
        </h2>

        <input
          name="nickname"
          onChange={(e) => setNickName(e.target.value)}
          value={nickname}
          className="mt-3 p-1 outline-none text-center rounded-lg"
          type="text"
          placeholder="Nick Name"
        />{" "}
        <br />
        <input
          name="score"
          onChange={(e) => setScore(e.target.value)}
          value={score}
          className="mt-3 p-1 outline-none text-center rounded-lg"
          type="text"
          placeholder="score"
        />{" "}
        <br />
        <input
          className="bg-blue-500 text-white p-2 rounded-xl"
          type="submit"
          value="Add Hacker"
        />
      </form>

      <div className="flex flex-col justify-center items-center">
        <h1 className="text-white text-2xl mt-2 p-1 border-b-2 border-white border-solid">
          List Hackers
        </h1>

        <section className="h-full w-full m-5 bg-blue-500">
          {

            useEffect(() => {
              projectFirestore.collection("data-hackers").get().then((snapshot) => {
                snapshot.docs.map((oneData) => {
                  
                  const { nickname , score } = oneData.data();
                  console.log(nickname);
                  console.log(score);

                  return (
                    <>
                      <p className="text-white">{nickname}</p>
                      <p className="text-white">{score}</p>
                    </>
                  )
                })
              })
            })

            
          }
        </section>
      </div>
    </div>
  );
};

export default LederBoard;
