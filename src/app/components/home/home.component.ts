import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {CardInstance} from '../../classes/CardInstance';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '18rem',
        opacity: 1
      })),
      state('close', style({
        height: '0px',
        opacity: 0
      })),
      transition('close => open', [
        animate('1s')
      ]),
      transition('open => close', [
        animate('1s')
      ]),
    ]),
  ]
})
export class HomeComponent implements OnInit {

  content: Array<CardInstance> = [{
    title: 'Lorem Ipsum', body: '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,\n' +
      '            consectetur, adipisci velit..."\n' +
      '            "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is\n' +
      '            pain..."', state: false
  },
    {
      title: 'What is Lorem Ipsum?',
      body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n' +
        '            industry\'s\n' +
        '            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to\n' +
        '            make a type specimen book. It has survived not only five centuries, but also the leap into electronic\n' +
        '            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset\n' +
        '            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus\n' +
        '            PageMaker including versions of Lorem Ipsum.', state: false
    }
    ,
    {
      title: 'Why do we use it?',
      body: 'It is a long established fact that a reader will be distracted by the readable content of a page when\n' +
        '            looking\n' +
        '            at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,\n' +
        '            as\n' +
        '            opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing\n' +
        '            packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem\n' +
        '            ipsum\'\n' +
        '            will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes\n' +
        '            by\n' +
        '            accident, sometimes on purpose (injected humour and the like).', state: false
    }
    ,
    {
      title: 'Where does it come from?',
      body: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical\n' +
        '            Latin\n' +
        '            literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at\n' +
        '            Hampden-Sydney\n' +
        '            College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,\n' +
        '            and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem\n' +
        '            Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and\n' +
        '            Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the\n' +
        '            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section\n' +
        '            1.10.32.\n' +
        '\n' +
        '            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections\n' +
        '            1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact\n' +
        '            original\n' +
        '            form, accompanied by English versions from the 1914 translation by H. Rackham.', state: false
    }
    ,
    {
      title: 'Where can I get some?', body: 'Where can I get some?\n' +
        '            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in\n' +
        '            some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are\n' +
        '            going\n' +
        '            to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle\n' +
        '            of\n' +
        '            text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making\n' +
        '            this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a\n' +
        '            handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem\n' +
        '            Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.', state: false
    }
  ];

  selectedCard: CardInstance;
  state = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  openClose(card: CardInstance): void {
    card.state = !card.state;
  }
}
