<<<<<<< HEAD:12-portals-and-refs/src/Carousel.tsx
import { Component, MouseEvent, ReactNode } from "react";
interface IProps {
  images: string[];
}
class Carousel extends Component<IProps> {
=======
import { Component } from 'react'

class Carousel extends Component {
>>>>>>> 22a8fbb4d38613b0822ec4e88a0b72733ba0f6b4:12-portals-and-refs/src/Carousel.js
  state = {
    active: 0,
  }

  static defaultProps = {
    images: ['http://pets-images.dev-apis.com/pets/none.jpg'],
  }

<<<<<<< HEAD:12-portals-and-refs/src/Carousel.tsx
  handleIndexClick = (event: MouseEvent<HTMLElement>): void => {
    if (!(event.target instanceof HTMLElement)) {
      return;
    }
    if (event.target.dataset.index) {
      this.setState({
        active: +event.target.dataset.index,
      });
    }
  };

  render(): ReactNode {
    const { active } = this.state;
    const { images } = this.props;
=======
  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index,
    })
  }

  render() {
    const { active } = this.state
    const { images } = this.props
>>>>>>> 22a8fbb4d38613b0822ec4e88a0b72733ba0f6b4:12-portals-and-refs/src/Carousel.js
    return (
      <div className="">
        <img
          src={images[active]}
          className="ml-auto mr-auto pb-24 rounded-full w-6/12"
          alt="dog"
        />
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              className=" my-10 px-2 bg-gradient-to-br from-purple-600 to-transparent rounded"
              key={photo}
              src={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              className={index === active ? 'active' : ''}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Carousel
