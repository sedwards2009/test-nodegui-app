/*
 * Copyright 2022 Simon Edwards <simon@simonzone.com>
 *
 * This source code is licensed under the MIT license which is detailed in the LICENSE.txt file.
 */
import { QLabel, QWidget, QMainWindow } from '@nodegui/nodegui';

function main(): void {
  const win = new QMainWindow();
  win.setWindowTitle('Hello World via NodeGui');

  const label = new QLabel();
  label.setText('Hello World via NodeGui!');

  win.setCentralWidget(label);

  win.show();

  (global as any).win = win;
}
main();
export {};
