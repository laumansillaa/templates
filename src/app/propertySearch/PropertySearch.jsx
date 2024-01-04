import CardProperty from "@/Components/Cards/CardProperty";
import Pagination from "@/Components/Pagination/Pagination";
import Search from "@/Components/Search/Search";
import { useSearchBarContext } from "@/Context/useSearchBar.context";
import style from "./styles/index.module.css";
import Loader from "@/Components/Loader/Loader";

export default function PropertySearch() {
  const { filteredProperties, handleSearch, currentPage, setCurrentPage } =
    useSearchBarContext();

  const itemsPerPage = 6;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems =
    filteredProperties &&
    filteredProperties.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
    {
      currentItems?.length > 0 ? (
        <section className="flex flex-col w-full h-full bg-[#00000014] justify-center items-center">
          <header className={style.contSearchBar}>
            <Search onSearch={handleSearch} />
          </header>
          <main className={style.contGridCards}>
            {currentItems &&
              currentItems.map((property) => {
                return <CardProperty key={property.id} property={property} />;
              })}
          </main>
          <div className="w-full h-[20vh] flex items-center justify-center">
            <Pagination
              postsPerPage={itemsPerPage}
              allPosts={filteredProperties && filteredProperties.length}
              onPageChange={handlePageChange}
              currentPage={currentPage}
            />
          </div>
        </section>

      ) : <Loader />
    }
    </>
  );
}
