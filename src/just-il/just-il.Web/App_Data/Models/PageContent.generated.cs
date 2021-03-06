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
	// Mixin content Type 1084 with alias "pageContent"
	/// <summary>_PageContent</summary>
	public partial interface IPageContent : IPublishedContent
	{
		/// <summary>#prop.PageBodyText</summary>
		IHtmlString BodyText { get; }

		/// <summary>#prop.PageHeadline</summary>
		string Headline { get; }

		/// <summary>#prop.PageLead</summary>
		IHtmlString Lead { get; }

		/// <summary>#prop.MainImage</summary>
		IPublishedContent MainImage { get; }
	}

	/// <summary>_PageContent</summary>
	[PublishedContentModel("pageContent")]
	public partial class PageContent : PublishedContentModel, IPageContent
	{
#pragma warning disable 0109 // new is redundant
		public new const string ModelTypeAlias = "pageContent";
		public new const PublishedItemType ModelItemType = PublishedItemType.Content;
#pragma warning restore 0109

		public PageContent(IPublishedContent content)
			: base(content)
		{ }

#pragma warning disable 0109 // new is redundant
		public new static PublishedContentType GetModelContentType()
		{
			return PublishedContentType.Get(ModelItemType, ModelTypeAlias);
		}
#pragma warning restore 0109

		public static PublishedPropertyType GetModelPropertyType<TValue>(Expression<Func<PageContent, TValue>> selector)
		{
			return PublishedContentModelUtility.GetModelPropertyType(GetModelContentType(), selector);
		}

		///<summary>
		/// #prop.PageBodyText: #prop.PageBodyText.d
		///</summary>
		[ImplementPropertyType("bodyText")]
		public IHtmlString BodyText
		{
			get { return GetBodyText(this); }
		}

		/// <summary>Static getter for #prop.PageBodyText</summary>
		public static IHtmlString GetBodyText(IPageContent that) { return that.GetPropertyValue<IHtmlString>("bodyText"); }

		///<summary>
		/// #prop.PageHeadline: #prop.PageHeadline.d
		///</summary>
		[ImplementPropertyType("headline")]
		public string Headline
		{
			get { return GetHeadline(this); }
		}

		/// <summary>Static getter for #prop.PageHeadline</summary>
		public static string GetHeadline(IPageContent that) { return that.GetPropertyValue<string>("headline"); }

		///<summary>
		/// #prop.PageLead: #prop.PageLead.d
		///</summary>
		[ImplementPropertyType("lead")]
		public IHtmlString Lead
		{
			get { return GetLead(this); }
		}

		/// <summary>Static getter for #prop.PageLead</summary>
		public static IHtmlString GetLead(IPageContent that) { return that.GetPropertyValue<IHtmlString>("lead"); }

		///<summary>
		/// #prop.MainImage: #prop.MainImage.d
		///</summary>
		[ImplementPropertyType("mainImage")]
		public IPublishedContent MainImage
		{
			get { return GetMainImage(this); }
		}

		/// <summary>Static getter for #prop.MainImage</summary>
		public static IPublishedContent GetMainImage(IPageContent that) { return that.GetPropertyValue<IPublishedContent>("mainImage"); }
	}
}
