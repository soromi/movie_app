import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import styled from "styled-components";
import DetailPoster from "Components/DetailPoster";
import Loader from "Components/Loader";

const Container = styled.div`
	position: relative;
	height: calc(100vh - 50px);
	width: 100%;
	padding: 50px;
`;

const Backdrop = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-image: url(${props => props.bgImage});
	background-position: center center;
	background-size: cover;
	filter: blur(3px);
	opacity: 0.5;
	z-index: 0;
`;

const Content = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	height: 100%;
	z-index: 1;
`;

const Cover = styled.div`
	width: 30%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	background-image: url(${props => props.bgImage});
	background-position: center center;
	background-size: cover;
	border-radius: 5px;
`;

const Data = styled.div`
	width: 70%;
	margin-left: 40px;
`;

const Title = styled.h3`
	font-size: 32px;
`;

const ItemContainer = styled.div`
	margin: 20px 0;
`;

const Item = styled.span``;

const Divider = styled.span`
	margin: 0 10px;
`;

const Overview = styled.p`
	font-size: 12px;
	opacity: 0.7;
	line-height: 1.5;
`;

const PosterContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, 125px);
	grid-gap: 25px;
	margin-top: 50px;
`;

const DetailPresenter = ({ result, loading, error }) =>
	loading ? (
		<>
			<Helmet>
				<title>Laoding... | Movie App</title>
			</Helmet>
			<Loader />
		</>
	) : (
		<Container>
			<Helmet>
				<title>
					{result.original_title
						? result.original_title
						: result.original_name}
					| Movie App
				</title>
			</Helmet>
			<Backdrop
				bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
			/>
			<Content>
				<Cover
					bgImage={`https://image.tmdb.org/t/p/original${result.poster_path}`}
				/>
				<Data>
					<Title>
						{result.original_title
							? result.original_title
							: result.original_name}
					</Title>
					<ItemContainer>
						<Item>
							{result.original_title
								? result.release_date.substring(0, 4)
								: result.first_air_date.substring(0, 4)}
						</Item>
						<Divider>•</Divider>
						<Item>
							{result.runtime
								? result.runtime
								: result.episode_run_time[0]}{" "}
							min
						</Item>
						<Divider>•</Divider>
						<Item>
							{result.genres &&
								result.genres.map((genre, index) =>
									index === result.genres.length - 1
										? genre.name
										: `${genre.name} / `
								)}
						</Item>
					</ItemContainer>
					<Overview>{result.overview}</Overview>
					<PosterContainer>
						{result.seasons &&
							result.seasons.map(show => (
								<DetailPoster
									key={show.id}
									id={show.id}
									title={show.name}
									imageUrl={show.poster_path}
									year={
										show.air_date &&
										show.air_date.substring(0, 4)
									}
								/>
							))}
					</PosterContainer>
				</Data>
			</Content>
		</Container>
	);

DetailPresenter.propTypes = {
	result: PropTypes.object,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.string
};

export default DetailPresenter;
