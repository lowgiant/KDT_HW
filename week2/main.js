// 상품 데이터
const data = [
    { name: '초콜렛', price: 2000 },
    { name: '아이스크림', price: 1000 },
    { name: '컵라면', price: 1600 },
    { name: '볼펜', price: 2500 },
    { name: '아메리카노', price: 4000 },
    { name: '과자', price: 3000 },
    { name: '탄산수', price: 1200 },
    { name: '떡볶이', price: 3500 },
    { name: '노트', price: 1500 },
    { name: '껌', price: 500 }
];

// 사용자 입력 받기
const line = prompt('최대 금액을 입력해주세요.');
const amount = +line;

// 주어진 금액으로 살 수 있는 가장 비싼 상품을 구함
const item = getItemByAmount(data, amount);

const msg = item ? 
    `${amount}원으로 살 수 있는 가장 비싼 상품은 [${item.name}]이고, 가격은 ${item.price}원입니다.` : 
    '살 수 있는 상품이 없습니다.';

// 결과 출력
alert(msg);

// 아래에 getItemByAmount 함수를 작성하세요.
function getItemByAmount(data, amount){
    //방어코드 추가
    if(isNaN(amount) || amount <= 0 ){
        return null;
    }

    // 상품데이터 가격 기준 올림차순 변경 후(높은 가격부터 loop 돌기 위함)
    data.sort((a,b) => {
        if (a.price < b.price) { 
            return 1;
        }
        if (a.price > b.price) {
            return -1; 
        }
        return 0;

    });
    
    // Item 클래스 생성
    class Item{
        constructor(name, price){
            this.name = name;
            this.price = price;
        }
    }

    let high_priced = new Item(null, null)

    // 조건이 맞으면 loop 나가고 가장 비싼 상품 저장
    data.some(data => {
        if (amount >= data.price){
            high_priced = new Item(data.name, data.price) 
            return true;
        }
    });

    // 값이 없으면 return 값이 없음
    if (!high_priced.name){    
        return null;
    }

    return high_priced;
    
}