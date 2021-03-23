main(List<String> args) {
  var b; // var声明变量
  final a = 123; // final声明常量
  const c = '保定'; // const声明常量
  // final和const的区别：const必须赋常量值；final可以通过计算/函数获取一个值
  final date1 = DateTime.now(); // const date = DateTime.now(); 为错误写法

  final p1 = Person('jay'); // 同final p1 = new Person();
  final p2 = Person('vae');
  print('hello');
}

class Person {
  String name = '111';
  Person(String name) {
    this.name = name;
  }
}
