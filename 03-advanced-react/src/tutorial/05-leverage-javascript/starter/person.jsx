import { people } from "./../../../data";
import avatar from "./../../../assets/default-avatar.svg";
const Person = () => {
  return (
    <div>
      {people.map((val) => {
        const { id, name, nickName = "unkown", images = ["testing"] } = val;

        return (
          <div key={id}>
            <h2> your name :{name}</h2>
            <p>your nick name : {nickName}</p>
            <p>
              your images :
              <img
                style={{ maxWidth: "100px" }}
                src={images[0].small.url || avatar}
                alt=""
              />
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Person;
