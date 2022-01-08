export default function getMonth(summary) {
  let sum = [];
  summary.forEach(({ ...item }) => {
    switch (item.month) {
      case '1':
        item.month = 'Январь';
        sum.push(item);
        break;

      case '2':
        item.month = 'Февраль';
        sum.push(item);
        break;

      case '3':
        item.month = 'Март';
        sum.push(item);
        break;

      case '4':
        item.month = 'Апрель';
        sum.push(item);
        break;

      case '5':
        item.month = 'Май';
        sum.push(item);
        break;

      case '6':
        item.month = 'Июнь';
        sum.push(item);
        break;

      case '7':
        item.month = 'Июль';
        sum.push(item);
        break;

      case '8':
        item.month = 'Август';
        sum.push(item);
        break;

      case '9':
        item.month = 'Сентябрь';
        sum.push(item);
        break;

      case '10':
        item.month = 'Октябрь';
        sum.push(item);
        break;

      case '11':
        item.month = 'Ноябрь';
        sum.push(item);
        break;

      case '12':
        item.month = 'Декабрь';
        sum.push(item);
        break;

      default:
        break;
    }
  });
  return sum;
}
