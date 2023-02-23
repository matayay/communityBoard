import React from "react";
import Restaurant from './Restaurant';
import restaurants from "./Images";

const Grid = () => {
    return (
        <div className="Grid">
            <Restaurant image={restaurants[0]} name="Dark Horse" food="Hamburgers" number="(303) 442-8162" address="2922 Baseline Rd, Boulder, CO 80303" link="https://darkhorsebar.com/" />
            <Restaurant image={restaurants[1]} name="Snarf Burger" food="Burgers" number="(303) 444-7711" address="2000 Arapahoe Ave, Boulder, CO 80302" link="https://www.snarfburger.com/" />
            <Restaurant image={restaurants[2]} name="The Buff" food="Brunch" number="(303) 442-9150" address="2600 Canyon Blvd, Boulder, CO 80302" link="https://www.buffrestaurant.com/" />
            <Restaurant image={restaurants[3]} name="Sforno Trattoria Romana" food="Pizza" number="(303) 449-1787" address="1308 Pearl St, Boulder, CO 80302" link="https://sfornoboulder.com/" />
            <Restaurant image={restaurants[4]} name="The Boulder Dushanbe Teahouse" food="Tea and Indian" number="(303) 442-4993" address="1770 13th St, Boulder, CO 80302" link="https://www.boulderteahouse.com/" />
            <Restaurant image={restaurants[5]} name="Avanti Food and Beverage" food="Pizza and Grill" number="(720) 343-7757" address="1401 Pearl St, Boulder, CO 80302" link="https://boulder.avantifandb.com/" />
            <Restaurant image={restaurants[6]} name="Le French Café" food="Breakfast and Lunch" number="(303) 284-2265" address="2525 Arapahoe Ave C-1, Boulder, CO 80302" link="https://www.lefrenchcafeboulder.com/" />
            <Restaurant image={restaurants[7]} name="Tibet Kitchen" food="Indian" number="(303) 440-0882" address="2359 Arapahoe Ave, Boulder, CO 80303" link="https://www.tibetkitchenllc.com/" />
            <Restaurant image={restaurants[8]} name="The Sink" food="Pizza and Burgers" number="(303) 444-7465" address="1165 13th St, Boulder, CO 80302" link="https://www.thesink.com/" />
            <Restaurant image={restaurants[9]} name="Illegal Pete's" food="Mexican" number="(303) 444-3055" address="1124 13th St, Boulder, CO 80302" link="https://www.illegalpetes.com/" />
        </div>
    );
};

export default Grid;