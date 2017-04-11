function ascByVotes(obj1, obj2) {
  return obj1.votes - obj2.votes;
}

function desByVotes(obj1, obj2) {
  return obj2.votes - obj1.votes;
}

export { ascByVotes, desByVotes};