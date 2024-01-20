const BranchDetail = async ({ params }: any) => {
  const data = await getData(params.branchId);
  console.log(data.data[0]);

  return (
    <div>
      <h1>Branch Detail: </h1>
    </div>
  );
};

async function getData(url: string) {
  try {
    const res = await fetch(
      `http://localhost:1337/api/branches?populate=deep&url=${url}`
    );
    return res.json();
  } catch (e) {
    console.log(e);
  }
}

export default BranchDetail;
