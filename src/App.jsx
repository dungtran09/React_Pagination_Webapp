import { PaginationButton, UserProfile, userDataFetcher } from "./compoments";

function App() {
  const { loadding, totalPages, users, currentPage, setCurrentPage } =
    userDataFetcher();
  return (
    <>
      {loadding ? (
        <div className="text-center section text-5xl">LOADDING...</div>
      ) : (
        <>
          <div className="grid grid-cols-3 gap-10">
            {users.map((user) => (
              <UserProfile key={user.id} {...user} />
            ))}
          </div>
          <PaginationButton
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
    </>
  );
}

export default App;
