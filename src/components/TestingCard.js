import { CardSwiper } from "react-card-rotate-swiper";

//...
const data = [
    { img: "/assets/images/actress1.jpg", name: 'Camila Cabello', age: '20', distance: '2 km' },
    { img: "/assets/images/actress1.jpg", name: 'kathrine', age: '23', distance: '5 km' },
    { img: "/assets/images/actress1.jpg", name: 'Julia kailey', age: '25', distance: '11 km' },
    { img: "/assets/images/actress1.jpg", name: 'salena gomez', age: '23', distance: '6 km' }
]
function TestingCard() {

    const handleSwipe = (d) => {
        //fill this your callback
    };

    return (
        <div className="dfsdf">
            {data.map((item) => {
                return (
                    <CardSwiper
                        onSwipe={handleSwipe}
                        className={"swiper"}
                        contents={
                            <img src={item.img} />

                        }
                    />
                )
            })}


        </div>
    );
}
export default TestingCard