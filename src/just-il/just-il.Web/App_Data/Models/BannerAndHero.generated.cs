//------------------------------------------------------------------------------
// <auto-generated>
//   This code was generated by a tool.
//
//    Umbraco.ModelsBuilder v3.0.10.102
//
//   Changes to this file will be lost if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Web;
using Umbraco.Core.Models;
using Umbraco.Core.Models.PublishedContent;
using Umbraco.Web;
using Umbraco.ModelsBuilder;
using Umbraco.ModelsBuilder.Umbraco;

namespace Umbraco.Web.PublishedContentModels
{
	// Mixin content Type 1148 with alias "bannerAndHero"
	/// <summary>_Hero</summary>
	public partial interface IBannerAndHero : IPublishedContent
	{
		/// <summary>#prop.HeroImage</summary>
		IPublishedContent HeroImage { get; }

		/// <summary>#prop.HeroImageLink</summary>
		IEnumerable<RJP.MultiUrlPicker.Models.Link> HeroImageLink { get; }

		/// <summary>#prop.HeroMobileImage</summary>
		IPublishedContent HeroMobileImage { get; }

		/// <summary>#prop.ShowImageInfo</summary>
		bool ShowImageInfo { get; }
	}

	/// <summary>_Hero</summary>
	[PublishedContentModel("bannerAndHero")]
	public partial class BannerAndHero : PublishedContentModel, IBannerAndHero
	{
#pragma warning disable 0109 // new is redundant
		public new const string ModelTypeAlias = "bannerAndHero";
		public new const PublishedItemType ModelItemType = PublishedItemType.Content;
#pragma warning restore 0109

		public BannerAndHero(IPublishedContent content)
			: base(content)
		{ }

#pragma warning disable 0109 // new is redundant
		public new static PublishedContentType GetModelContentType()
		{
			return PublishedContentType.Get(ModelItemType, ModelTypeAlias);
		}
#pragma warning restore 0109

		public static PublishedPropertyType GetModelPropertyType<TValue>(Expression<Func<BannerAndHero, TValue>> selector)
		{
			return PublishedContentModelUtility.GetModelPropertyType(GetModelContentType(), selector);
		}

		///<summary>
		/// #prop.HeroImage: #prop.HeroImage.d
		///</summary>
		[ImplementPropertyType("heroImage")]
		public IPublishedContent HeroImage
		{
			get { return GetHeroImage(this); }
		}

		/// <summary>Static getter for #prop.HeroImage</summary>
		public static IPublishedContent GetHeroImage(IBannerAndHero that) { return that.GetPropertyValue<IPublishedContent>("heroImage"); }

		///<summary>
		/// #prop.HeroImageLink: #prop.HeroImageLink.d
		///</summary>
		[ImplementPropertyType("heroImageLink")]
		public IEnumerable<RJP.MultiUrlPicker.Models.Link> HeroImageLink
		{
			get { return GetHeroImageLink(this); }
		}

		/// <summary>Static getter for #prop.HeroImageLink</summary>
		public static IEnumerable<RJP.MultiUrlPicker.Models.Link> GetHeroImageLink(IBannerAndHero that) { return that.GetPropertyValue<IEnumerable<RJP.MultiUrlPicker.Models.Link>>("heroImageLink"); }

		///<summary>
		/// #prop.HeroMobileImage: #prop.HeroMobileImage.d
		///</summary>
		[ImplementPropertyType("heroMobileImage")]
		public IPublishedContent HeroMobileImage
		{
			get { return GetHeroMobileImage(this); }
		}

		/// <summary>Static getter for #prop.HeroMobileImage</summary>
		public static IPublishedContent GetHeroMobileImage(IBannerAndHero that) { return that.GetPropertyValue<IPublishedContent>("heroMobileImage"); }

		///<summary>
		/// #prop.ShowImageInfo: #prop.ShowImageInfo.d
		///</summary>
		[ImplementPropertyType("showImageInfo")]
		public bool ShowImageInfo
		{
			get { return GetShowImageInfo(this); }
		}

		/// <summary>Static getter for #prop.ShowImageInfo</summary>
		public static bool GetShowImageInfo(IBannerAndHero that) { return that.GetPropertyValue<bool>("showImageInfo"); }
	}
}