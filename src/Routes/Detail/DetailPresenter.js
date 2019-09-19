import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import styled from "styled-components";
import DetailPoster from "Components/DetailPoster";
import CompanieLogo from "Components/CompanieLogo";
import Creator from "Components/Creator";
import YTSlider from "Components/YTSlider";
import Loader from "Components/Loader";
import DBLogo from "asset/icon_imdb.png";

const Container = styled.div`
	position: relative;
	height: calc(100vh - 50px);
	width: calc(100% + 40px);
	left: -20px;
	padding: 50px;
	@media (max-width: 767px) {
		padding: 0;
	}
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
	@media (max-width: 767px) {
		display: inline-block;
		height: 100%;
		margin-left: initial;
		overflow: auto;
	}
`;

const Cover = styled.div`
	width: 30%;
	height: 40vw;
	background-color: rgba(0, 0, 0, 0.5);
	background-image: url(${props => props.bgImage});
	background-position: center center;
	background-size: cover;
	border-radius: 5px;
	margin-bottom: 50px;
	@media (max-width: 767px) {
		width: 100%;
		height: 66vh;
		border-radius: 0;
	}
`;

const Data = styled.div`
	width: 70%;
	height: calc(100% + 45px);
	margin-left: 40px;
	overflow: auto;
	-ms-overflow-style: none;
	&::-webkit-scrollbar {
		display: none !important;
	}
	@media (max-width: 767px) {
		width: 100%;
		height: auto;
		margin-left: 0;
		padding: 20px;
		overflow: initial;
	}
`;

const Title = styled.h3`
	font-size: 32px;
`;

const ItemContainer = styled.div`
	margin: 20px 0;
	> * {
		vertical-align: -webkit-baseline-middle;
	}
`;

const Item = styled.span``;

const DBLink = styled.a`
	display: inline-block;
	width: 32px;
	height: 16px;
	background-image: url(${DBLogo});
	background-size: cover;
	margin-left: 10px;
	@media (max-width: 767px) {
		display: block;
		margin-left: 0;
		margin-top: 10px;
	}
`;

const Divider = styled.span`
	margin: 0 5px;
`;

const Overview = styled.p`
	font-size: 12px;
	opacity: 0.7;
	line-height: 1.5;
`;

const CompanieContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, 125px);
	grid-gap: 25px;
	margin: 50px 0;
	@media (max-width: 767px) {
		grid-template-rows: repeat(auto-fill, 30vw);
		grid-template-columns: repeat(auto-fill, 20%);
		grid-gap: 5vw;
	}
`;

const CreatorContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, 125px);
	grid-gap: 25px;
	margin: 50px 0;
	@media (max-width: 767px) {
		grid-template-rows: repeat(auto-fill, 30vw);
		grid-template-columns: repeat(auto-fill, 20%);
		grid-gap: 5vw;
	}
`;

const PosterContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, 125px);
	grid-gap: 25px;
	margin: 50px 0;
	@media (max-width: 767px) {
		grid-template-rows: repeat(auto-fill, 75vw);
		grid-template-columns: repeat(auto-fill, 47%);
		grid-gap: 5vw;
	}
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
					{/* 데이터 */}
					<Title>
						{result.original_title
							? result.original_title
							: result.original_name}
					</Title>
					<ItemContainer>
						<Item>
							{result.original_title
								? result.original_title.substring(0, 4)
								: result.first_air_date &&
								  result.first_air_date.substring(0, 4)}
						</Item>
						<Divider>•</Divider>
						<Item>
							{result.runtime
								? result.runtime
								: result.episode_run_time &&
								  result.episode_run_time[0]}{" "}
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
						{result.imdb_id && (
							<DBLink
								href={`https://www.imdb.com/title/${result.imdb_id}`}
								target="_blank"
							/>
						)}
					</ItemContainer>
					{result.imdb_id && <Overview>{result.overview}</Overview>}

					{/* 제작사 */}
					{result.production_companies &&
						result.production_companies.length > 0 && (
							<CompanieContainer>
								{result.production_companies.map(companies => (
									<CompanieLogo
										key={companies.id}
										name={companies.name}
										logo={companies.logo_path}
										country={companies.origin_country}
									/>
								))}
							</CompanieContainer>
						)}
					{result.created_by && result.created_by.length > 0 && (
						<CreatorContainer>
							{result.created_by.map(creator => (
								<Creator
									key={creator.id}
									name={creator.name}
									imageUrl={creator.profile_path}
								/>
							))}
						</CreatorContainer>
					)}

					{/* 시즌 */}
					{result.seasons && (
						<PosterContainer>
							{result.seasons.map(show => (
								<DetailPoster
									key={show.id}
									title={show.name}
									imageUrl={show.poster_path}
									year={
										show.air_date &&
										show.air_date.substring(0, 4)
									}
								/>
							))}
						</PosterContainer>
					)}

					{/* 비디오 */}
					{result.videos.results.map(video => (
						<YTSlider key={video.id} videoKey={video.key} />
					))}
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
