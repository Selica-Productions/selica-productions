import CountryMap from "../components/country-map/country-map";
import PageLayout from './../components/layouts/page-layout/page-layout';

function MapPage() {
  return (
    <PageLayout className="appear">
      <CountryMap />
    </PageLayout>
  )
}

export default MapPage;