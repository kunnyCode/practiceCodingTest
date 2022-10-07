// import React, {useState} from "react";

// // Halloween 컴포넌트를 구현하세요.
// function Halloween() {
//   const [emoji, setEmoji] = useState("")

//   function handleEmoji(e){
//     if(e.target.value === 'Treat'){
//       setEmoji('🍬🍭🍫')
//     }else if(e.target.value === 'Trick'){
//       setEmoji('😛😛😛')
//     }
//   }

//   return (
// 		<>
// 			<h1>Treat or Trick?</h1>
// 			<button onClick={handleEmoji} value="Treat">Treat</button>
// 			<button onClick={handleEmoji} value="Trick">Trick</button>
// 			<p>{emoji}</p>
// 		</>
// 	)

// }

// export default Halloween;

// function getMaximumRemovals(order, source, target) {
//   // Write your code here
//   let string = source;

//   const location = {};
//   let newStr = "";
//   let count = 0;

//   for (let i = 0; i < source.length; i++) {
//     if (target.includes(source[i])) {
//       location[i] = source[i];
//       newStr += source[i];
//     }
//   }
//   console.log(newStr);
//   console.log(location);

//   for (let i = 0; i < order.length; i++) {
//     const index = order[i] - 1;
//     // string = string.slice(0, index) + '-' + string.slice(index + 1)

//     if (location.hasOwnProperty(index)) {
//       delete location[index];
//       newStr = Object.values(location).join("");
//       console.log("newStr", newStr, index);

//       if (newStr.includes(target)) {
//         count++;
//         continue;
//       } else {
//         return count;
//       }
//     }
//     count++;
//   }

//   return count;
// }

// console.log(getMaximumRemovals([7, 1, 2, 3, 4, 5, 6], "abbabaa", "bb"));

// function getMinimumHealth(initial_players, new_players, rank) {
//   // Write your code here
//   const length = new_players.length + 1;
//   let players = initial_players.sort((a, b) => b - a);
//   let hp = 0;
//   for (let i = 0; i < length; i++) {
//     hp += players[rank - 1];
//     const newPlayer = new_players.shift();
//     for (let i = 0; i < players.length; i++) {
//       if (newPlayer > players[i]) {
//         players.splice(i, 0, newPlayer);
//         console.log(players);
//         break;
//       }
//     }
//   }

//   return hp;
// }

// console.log(getMinimumHealth([1, 1, 3], [2, 2, 4], 2));

async function getPhoneNumbers(country, phoneNumber) {
  const { data } = await fetch(
    `https://jsonmock.hackerrank.com/api/countries?name=${country}`
  );
  return data[0]["name"];
}

const dd = getPhoneNumbers("Afghanistan");
console.log(dd);
