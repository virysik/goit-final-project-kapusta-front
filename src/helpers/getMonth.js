export default function getMonth(summary) {
  return summary.forEach(item => {
    switch (item.month) {
      case '1':
        item.month = 'Январь';
        break;

      case '2':
        item.month = 'Февраль';
        break;

      case '3':
        item.month = 'Март';
        break;

      case '4':
        item.month = 'Апрель';
        break;

      case '5':
        item.month = 'Май';
        break;

      case '6':
        item.month = 'Июнь';
        break;

      case '7':
        item.month = 'Июль';
        break;

      case '8':
        item.month = 'Август';
        break;

      case '9':
        item.month = 'Сентябрь';
        break;

      case '10':
        item.month = 'Октябрь';
        break;

      case '11':
        item.month = 'Ноябрь';
        break;

      case '12':
        item.month = 'Декабрь';
        break;

      default:
        break;
    }
  });
}
