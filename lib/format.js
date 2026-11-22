export const vnd = (n) => n.toLocaleString('vi-VN') + 'đ';

export const norm = (s) =>
  s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd');
