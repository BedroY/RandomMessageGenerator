let random = Math.floor(Math.random() * 3);

const Messages = ["The dreams of those who've fallen! The hopes of those who'll follow! Those two sets of dreams weave together into a double helix! Drilling a path towards tomorrow! And that's Tengen Toppa! That's Gurren Lagann! - Simon",
 "God gave us eyes at the front of our heads so we can look forward to the future. - Kamina", "If there's a wall in our way then we smash it down! If there isn't a path, then we carve one ourselves!"]

 function randomMessage(random, Messages) {
     if (random === 1){
         return Messages[0];
     } else if (random === 2) {
         return Messages[1];
     } else if (random === 3) {
         return Messages[2];
     }
 }

 randomMessage(random,Messages);